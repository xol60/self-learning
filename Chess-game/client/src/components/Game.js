import { useState, useMemo, useCallback, useEffect } from "react";
import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Stack,
    Typography,
    Box,
} from "@mui/material";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import CustomDialog from "./Dialog.js";
import socket from "./socket.js";
function Game({ players, room, orientation, cleanup }) {
    const chess = useMemo(() => new Chess(), []);
    const [fen, setFen] = useState(chess.fen());
    const [over, setOver] = useState("");
    const makeAMove = useCallback(
        (move) => {
            try {
                const result = chess.move(move);
                setFen(chess.fen());

                if (chess.isGameOver()) {
                    if (chess.isCheckmate()) {
                        setOver(
                            `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
                        );

                    } else if (chess.isDraw()) {
                        setOver("Draw");
                    } else {
                        setOver("Game over");
                    }
                }

                return result;
            } catch (e) {
                return null;
            }
        },
        [chess]
    );
    useEffect(() => {
        socket.on("move", (move) => {
            makeAMove(move); //
        });
    }, [makeAMove]);
    useEffect(() => {
        socket.on('playerDisconnected', (player) => {
            setOver(`${player.username} has disconnected`);
        });
    }, []);
    useEffect(() => {
        socket.on('closeRoom', ({ roomId }) => {
            if (roomId === room) {
                cleanup();
            }
        });
    }, [room, cleanup]);

    function onDrop(sourceSquare, targetSquare) {
        if (chess.turn() !== orientation[0]) return false;

        if (players.length < 2) return false;

        const moveData = {
            from: sourceSquare,
            to: targetSquare,
            color: chess.turn(),
            promotion: "q",
        };

        const move = makeAMove(moveData);


        if (move === null) return false;

        socket.emit("move", {
            move,
            room,
        });

        return true;
    }
    return (
        <Stack>
            <Card>
                <CardContent>
                    <Typography variant="h5">Room ID: {room}</Typography>
                </CardContent>
            </Card>
            <Stack flexDirection="row" sx={{ pt: 2 }}>
                <div className="board" style={{
                    maxWidth: 600,
                    maxHeight: 600,
                    flexGrow: 1,
                }}>
                    <Chessboard
                        position={fen}
                        onPieceDrop={onDrop}
                        boardOrientation={orientation}
                    />
                </div>
                {players.length > 0 && (
                    <Box>
                        <List>
                            <ListSubheader>Players</ListSubheader>
                            {players.map((p) => (
                                <ListItem key={p.id}>
                                    <ListItemText primary={p.username} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}
            </Stack>
            <CustomDialog
                open={Boolean(over)}
                title={over}
                contentText={over}
                handleContinue={() => {
                    socket.emit("closeRoom", { roomId: room });
                    cleanup();
                }}
            />
        </Stack>
    );
}

export default Game;