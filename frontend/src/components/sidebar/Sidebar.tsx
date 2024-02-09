import './Sidebar.scss';

const Sidebar: React.FC = () => {
    // const toggle = () => {
    //     const sidebar = document.querySelector('[data-js="sidebar"]');
    //     sidebar?.classList.toggle('sidebar-open');
    // };

    return (
        <div className="sidebar" data-js="sidebar">
            <p>hello</p>
        </div>
    );
}

export default Sidebar;