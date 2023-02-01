import React from 'react';
import { Dropdown } from 'antd';
const items = [
    {
        label: <>
            <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                <div>Docs</div>
                <div className='self-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                        <line x1="3" y1="6" x2="3" y2="19"></line>
                        <line x1="12" y1="6" x2="12" y2="19"></line>
                        <line x1="21" y1="6" x2="21" y2="19"></line>
                    </svg>
                </div>
            </div>
        </>,
        key: '0',
    },
    {
        label:
            <>
                <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                    <div>Code</div>
                    <div className='self-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="7 8 3 12 7 16"></polyline>
                            <polyline points="17 8 21 12 17 16"></polyline>
                            <line x1="14" y1="4" x2="10" y2="20"></line>
                        </svg>
                    </div>
                </div>
            </>,
        key: '1',
    },
    {
        label: <>
            <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                <div>Forum</div>
                <div className='self-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
                        <line x1="8" y1="9" x2="16" y2="9"></line>
                        <line x1="8" y1="13" x2="14" y2="13"></line>
                    </svg>
                </div>
            </div>
        </>,
        key: '3',
    },
    {
        label:
            <>
                <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                    <div>Twitter</div>
                    <div className='self-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                    </div>
                </div>
            </>,
        key: '1',
    },
    {
        label:
            <>
                <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                    <div>Discord</div>
                    <div className='self-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
                            <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
                            <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
                        </svg>
                    </div>
                </div>
            </>,
        key: '1',
    },
    {
        label:
            <>
                <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                    <div>Telegram</div>
                    <div className='self-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                        </svg>
                    </div>
                </div>
            </>,
        key: '1',
    },
    {
        label:
            <>
                <div className='flex justify-between tp font-bold more-links-dropdown-items'>
                    <div>Mirror</div>
                    <div className='self-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-half" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 4v16"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <path d="M12 13l7.5 -7.5"></path>
                            <path d="M12 18l8 -8"></path>
                            <path d="M15 20l5 -5"></path>
                            <path d="M12 8l4 -4"></path>
                        </svg>
                    </div>
                </div>
            </>,
        key: '1',
    },
   
];
const MoreLinksDropdown = () => (
    <div className='more-links-dropdown'>
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
            <a className='tp' onClick={(e) => e.preventDefault()} href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="5" cy="12" r="1"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                </svg>
            </a>
        </Dropdown>
    </div>

);
export default MoreLinksDropdown;