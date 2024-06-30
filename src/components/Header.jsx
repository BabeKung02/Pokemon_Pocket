import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="py-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div style={{ marginLeft: '50px' }}>
                    <label className="align-items-center">Welcome to Pokemon shop!</label>
                </div>
                <ul className="navigation">
                    <li style={{position:'relative'}}>
                        <svg style={{position:'absolute', top:'5px', left:'-20px'}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1792 7.7934C3.19 4.61296 5.77702 2.04346 8.95746 2.05423C12.1379 2.06507 14.7074 4.65209 14.6966 7.83253V7.89774C14.6575 9.96514 13.5031 11.876 12.0879 13.3695C11.2785 14.21 10.3747 14.954 9.39442 15.5869C9.1323 15.8136 8.74349 15.8136 8.48137 15.5869C7.02 14.6357 5.7374 13.4348 4.69224 12.039C3.76071 10.822 3.23182 9.34472 3.1792 7.81296V7.7934Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.93794 9.7499C9.95726 9.7499 10.7836 8.92357 10.7836 7.90425C10.7836 6.88492 9.95726 6.05859 8.93794 6.05859C7.91861 6.05859 7.09229 6.88492 7.09229 7.90425C7.09229 8.92357 7.91861 9.7499 8.93794 9.7499Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="text-dark text-decoration-none me-3">Contact 123456 |</span>
                    </li>
                    <li style={{ marginLeft: '-25px'}}>
                        <svg style={{ margin: '2px 5px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 14.25C6.39782 14.25 6.77936 14.092 7.06066 13.8107C7.34196 13.5294 7.5 13.1478 7.5 12.75C7.5 12.3522 7.34196 11.9706 7.06066 11.6893C6.77936 11.408 6.39782 11.25 6 11.25C5.60218 11.25 5.22064 11.408 4.93934 11.6893C4.65804 11.9706 4.5 12.3522 4.5 12.75C4.5 13.1478 4.65804 13.5294 4.93934 13.8107C5.22064 14.092 5.60218 14.25 6 14.25V14.25ZM13.5 14.25C13.8978 14.25 14.2794 14.092 14.5607 13.8107C14.842 13.5294 15 13.1478 15 12.75C15 12.3522 14.842 11.9706 14.5607 11.6893C14.2794 11.408 13.8978 11.25 13.5 11.25C13.1022 11.25 12.7206 11.408 12.4393 11.6893C12.158 11.9706 12 12.3522 12 12.75C12 13.1478 12.158 13.5294 12.4393 13.8107C12.7206 14.092 13.1022 14.25 13.5 14.25V14.25Z" stroke="#373737" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5375 12.75H11.25V4.95C11.25 4.83065 11.2026 4.71619 11.1182 4.6318C11.0338 4.54741 10.9193 4.5 10.8 4.5H0.75M4.2375 12.75H2.7C2.64091 12.75 2.58239 12.7384 2.52779 12.7157C2.4732 12.6931 2.42359 12.66 2.3818 12.6182C2.34002 12.5764 2.30687 12.5268 2.28425 12.4722C2.26164 12.4176 2.25 12.3591 2.25 12.3V8.625" stroke="#373737" stroke-linecap="round" />
                            <path d="M1.5 6.75H4.5" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.25 6.75H15.4575C15.5445 6.75002 15.6296 6.77525 15.7025 6.82264C15.7755 6.87002 15.8331 6.93753 15.8685 7.017L17.211 10.038C17.2366 10.0954 17.2499 10.1574 17.25 10.2202V12.3C17.25 12.3591 17.2384 12.4176 17.2157 12.4722C17.1931 12.5268 17.16 12.5764 17.1182 12.6182C17.0764 12.66 17.0268 12.6931 16.9722 12.7157C16.9176 12.7384 16.8591 12.75 16.8 12.75H15.375M11.25 12.75H12" stroke="#373737" stroke-linecap="round" />
                        </svg>

                        <span className="text-dark text-decoration-none me-3">Track your order |</span>
                    </li>
                    <li style={{ marginLeft: '-25px'}}>
                        <svg style={{ position: 'relative', top: '-2px', left: '-2px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5956 5.29193C3.5956 4.35518 4.35535 3.59543 5.29135 3.59543H6.0631C6.5101 3.59543 6.93985 3.41843 7.25785 3.10268L7.7971 2.56268C8.45785 1.89893 9.53185 1.89593 10.1956 2.55668L10.2024 2.56268L10.7424 3.10268C11.0596 3.41843 11.4894 3.59543 11.9371 3.59543H12.7081C13.6449 3.59543 14.4046 4.35518 14.4046 5.29193V6.06218C14.4046 6.51068 14.5816 6.93968 14.8974 7.25768L15.4374 7.79768C16.1011 8.45843 16.1049 9.53168 15.4441 10.1962L15.4374 10.2029L14.8974 10.7429C14.5816 11.0594 14.4046 11.4899 14.4046 11.9369V12.7087C14.4046 13.6454 13.6449 14.4044 12.7081 14.4044H11.9371C11.4894 14.4044 11.0596 14.5822 10.7424 14.8979L10.2024 15.4372C9.54235 16.1017 8.46835 16.1047 7.80385 15.4439C7.8016 15.4417 7.79935 15.4394 7.7971 15.4372L7.25785 14.8979C6.93985 14.5822 6.5101 14.4044 6.0631 14.4044H5.29135C4.35535 14.4044 3.5956 13.6454 3.5956 12.7087V11.9369C3.5956 11.4899 3.41785 11.0594 3.1021 10.7429L2.56285 10.2029C1.89835 9.54218 1.89535 8.46818 2.5561 7.80443L2.56285 7.79768L3.1021 7.25768C3.41785 6.93968 3.5956 6.51068 3.5956 6.06218V5.29193Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.07227 10.9273L10.9273 7.07227" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.9248 11.4918C10.7748 11.4918 10.6323 11.4318 10.5273 11.3268C10.4748 11.2743 10.4373 11.2068 10.4073 11.1393C10.3773 11.0718 10.3623 11.005 10.3623 10.9293C10.3623 10.8543 10.3773 10.7793 10.4073 10.7118C10.4373 10.6443 10.4748 10.5843 10.5273 10.5318C10.7373 10.3218 11.1123 10.3218 11.3223 10.5318C11.3748 10.5843 11.4198 10.6443 11.4498 10.7118C11.4723 10.7793 11.4873 10.8543 11.4873 10.9293C11.4873 11.005 11.4723 11.0718 11.4498 11.1393C11.4198 11.2068 11.3748 11.2743 11.3223 11.3268C11.2173 11.4318 11.0748 11.4918 10.9248 11.4918Z" fill="#373737" />
                            <path d="M7.06982 7.63711C6.99482 7.63711 6.92732 7.62136 6.85982 7.59136C6.79232 7.56136 6.72482 7.52461 6.67232 7.47211C6.61982 7.41211 6.58232 7.35211 6.55232 7.28461C6.52232 7.21636 6.50732 7.14961 6.50732 7.07461C6.50732 6.99886 6.52232 6.92461 6.55232 6.85711C6.58232 6.78961 6.61982 6.72211 6.67232 6.67711C6.88982 6.46636 7.25732 6.46636 7.46732 6.67711C7.57232 6.78136 7.63232 6.92461 7.63232 7.07461C7.63232 7.14961 7.62482 7.21636 7.59482 7.28461C7.56482 7.35211 7.51982 7.41211 7.46732 7.47211C7.41482 7.52461 7.35482 7.56136 7.28732 7.59136C7.21982 7.62136 7.14482 7.63711 7.06982 7.63711Z" fill="#373737" />
                        </svg>

                        <span className="text-dark text-decoration-none">All Offers</span>
                    </li>
                </ul>
            </div>     
        </header>

        
    );
};

export default Header;
