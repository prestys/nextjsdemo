import Link from "next/link";

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-wrapper">
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
