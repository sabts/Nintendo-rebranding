const Tabs = ({ tabs, activeTab, onTabChange }) => {
    return (
      <div>
        {tabs.map(tab => (
          <button key={tab.title} onClick={() => onTabChange(tab.title)}>
            <img src={tab.icon} alt={`${tab.title} icon`} />
            {tab.title}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;