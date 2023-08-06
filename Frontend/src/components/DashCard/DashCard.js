import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const cardData = [
   
    {
        id: 2,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 10,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 9,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 8,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 7,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 6,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 5,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 4,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Mark"
    },
    {
        id: 3,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "ethan"
    },
]
const DashCard = () => (
    <>
        <div className='row' >
            {cardData.map((e) => {
                return (
                    <div className='col mb-4'  key={e.id}>
                        <Card
                            style={{
                                width: 220,
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={e.img}
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title={e.title}
                                description="This is the description"
                            />
                        </Card>
                    </div>
                )
            })}
        </div>
    </>
);
export default DashCard;