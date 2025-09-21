import React from "react";

const Header: React.FC = () => {
    return(
        <>
            <header>
                <nav>
                    <a href="#"> Home </a>
                    <a href="#"> About </a>
                    <a href="#"> Contact </a>
                    <a href="#"> Book Us </a>
                </nav>
            </header>
        </>
    );
}

export default Header;

// export default function Header(){
//     return(
//         <div>
//             <h1>Header</h1>
//         </div>
//     );
// }