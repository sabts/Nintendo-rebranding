
import { useState } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { StyledMenu } from './menu-styles';

const Menu = () => {
	const [activeTab, setActiveTab] = useState(MENU_ITEMS[0].title);
	const currentSection = MENU_ITEMS.find(section => section.title === activeTab);
  
	return (
	  <div>
		<Tabs
		  tabs={MENU_ITEMS.map(section => section.title)}
		  activeTab={activeTab}
		  onTabChange={setActiveTab}
		/>
		{currentSection && <Content items={currentSection.items} />}
	  </div>
	);
  };
	
	export default Menu;