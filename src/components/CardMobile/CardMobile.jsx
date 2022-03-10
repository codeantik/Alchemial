import backgroudImage from '../../Images/background-img.png';
import "./CardMobile.css";

export default function CardMobile() {
    return (
        <div className="container">
        <div className="card-wrapper">
            <div className="card">
                <div className="image">
                    <img src={backgroudImage} alt='bg-image' />
                </div>
                <div className="details">
                    <div className="header">
                        <h2>Get <span>insights</span> that help your business grow.</h2>
                    </div>
                    <div className="description">
                        <p>
                            Discover the benefits of data analytics and make better
                            decisions regarding revenue, customer experience, and overall
                            efficiency.
                        </p>
                    </div>
                    <div className="statistics">
                        <div className="companies">
                            <h2>10K+</h2>
                            <p>Companies</p>
                        </div>
                        <div className="templates">
                            <h2>314</h2>
                            <p>Templates</p>
                        </div>
                        <div className="queries">
                            <h2>12M+</h2>
                            <p>Queries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}