// Styles
import './home.css';
import '../../components/Sidebar/sidebar.css';
import '../../components/Navbar/navbar.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                
                <div className="main">
                    <Navbar />
                    <div className="posts">
                        {Array.from({ length: 50 }).map((_, index) => (
                            <div key={index} style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
                                Post content {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
