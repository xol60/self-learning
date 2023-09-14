import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { auth } from '../../firebase/config.js'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../../Context/AuthProvider.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config.js'
const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);
  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
    const { photoURL, displayName } = React.useContext(AuthContext).user

    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Typography.Text className='username'>{displayName}</Typography.Text>
            </div>
            <Button
                ghost
                onClick={() => {
                    // clear state in App Provider when logout
                    console.log(5555)
                    signOut(auth).then(() => {
                        console.log(4444);
                    }).catch((error) => {
                        // An error happened.
                    });
                }}
            >
                Đăng xuất
            </Button>
        </WrapperStyled >
    );
}