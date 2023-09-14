import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { auth, db } from '../../firebase/config.js'
import { signInWithPopup, FacebookAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import { addDocument, generateKeywords } from '../../firebase/service.js'
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;


export default function Login() {
    const provider = new FacebookAuthProvider();
    const navigate = useNavigate();
    const handleLogin = async () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const additionalUserInfo = getAdditionalUserInfo(result);
                const user = result.user;
                if (additionalUserInfo.isNewUser) {
                    addDocument("users", {
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        uid: user.uid,
                        providerId: additionalUserInfo.providerId,
                        keywords: generateKeywords(user.displayName),
                    }
                    )
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div>
            <Row justify='center' style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>
                        Fun Chat
                    </Title>
                    <Button
                        style={{ width: '100%', marginBottom: 5 }}

                    >
                        Đăng nhập bằng Google
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        onClick={() => handleLogin()}
                    >
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    );
}