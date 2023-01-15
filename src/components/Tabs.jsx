import React, { useState } from 'react';

const Tabs = (tabs) => {

    const [currentTab, setCurrentTab] = useState('1');
    
    

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    // const display_content = (content_name) => {
    //     return (
    //     <div>
    //         <Game/>
    //     </div>);
    // }

    return (
        <div>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p>{tab.content}</div>}
                    </div>
                )}
            </div>
        </div>
    );
}


export default Tabs;
