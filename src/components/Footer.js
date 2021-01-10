import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Footer() {
    const today = new Date();
    return (
        <footer>
            <div id="footer-ctn">
                <p>Copyright &copy; {today.getFullYear()} | Design + Development by <u>Anant Jawanda</u></p>
            </div>
        </footer>
    )
}

export default Footer; 