const Tabs = ({ tabs, activeTab, onTabChange }) => {
    return (
      <div>
        {tabs.map(tab => (
          <button key={tab} onClick={() => onTabChange(tab)}>
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;