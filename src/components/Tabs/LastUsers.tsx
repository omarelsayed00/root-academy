import { Tab, TabsContainer } from "./styles";

export type TabName = "قيد المراجعة" | "تم التحقق";

export type TabType = {
  index: number;
  name: TabName;
};

type TabsTypes = {
  tabs: Array<TabType>;
  selectedTab: string;
  setSelectedTab: (val: TabName) => void;
};

const LastUsers = ({ tabs, selectedTab, setSelectedTab }: TabsTypes) => {
  const onTabChange = (tabName: TabName) => () => {
    setSelectedTab(tabName);
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          onClick={onTabChange(tab.name)}
          active={tab.name === selectedTab}
        >
          <span>{tab.name}</span>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default LastUsers;
