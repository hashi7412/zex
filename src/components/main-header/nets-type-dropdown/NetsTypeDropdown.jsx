import React from 'react';
import { Dropdown, Space, Tabs, theme } from 'antd';
import MainnetsContent from './mainnets-content/MainnetsContent';
import TestnetsContent from './testnets-content/TestnetsContent';
const { useToken } = theme;
const items = [
    {
        key: '1',
        label: '',
    }
];
const NetsTypeDropdown = () => {
    const { token } = useToken();
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: 'none',
    };
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomRight"
            trigger={['click']}
            style={{ backgroundColor: 'green' }}
            className="nets-dropdown"
            dropdownRender={(menu) => (
                <div style={contentStyle}>
                    {React.cloneElement(menu, {
                        style: menuStyle,
                    })}

                    <div className='nets-dropdown-container'>
                        <Tabs
                            className='nets-dropdown-tabs'
                            defaultActiveKey="1"
                            onChange={onChange}
                            items={[
                                {
                                    label: `Mainnets`,
                                    key: '1',
                                    children: <MainnetsContent />,
                                },
                                {
                                    label: `Testnets`,
                                    key: '2',
                                    children: <TestnetsContent />,
                                },
                            ]}
                        />
                    </div>
                </div>
            )}
        >
            <a className='tp text-sm font-bold mr-5' onClick={(e) => e.preventDefault()} href="#0">
                <Space className='whitespace-nowrap'>
                    Polygon Testnet
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </Space>
            </a>
        </Dropdown>
    );
};
export default NetsTypeDropdown;