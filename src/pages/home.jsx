import React from 'react'
import { List } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import NoteTabs from './../components/home/addNoteTab'

const panes = [
    {
      menuItem: 'Expense',
      render: () => <Tab.Pane attached={false}>
        <NoteTabs />
      </Tab.Pane>,
    },
    {
      menuItem: 'Transfer',
      render: () => <Tab.Pane attached={false}>Transfer Content</Tab.Pane>,
    },
    {
      menuItem: 'Income',
      render: () => <Tab.Pane attached={false}>Income Content</Tab.Pane>,
    },
  ]
  
  const TabExampleSecondaryPointing = () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  )

const home = () => {
    return (
    <>
        <div className="ui grid">
            <div className="six wide column">
                <List as='ol'>

                    <List.Item as='li' value=''>Ballance</List.Item>
                    
                    <List.Item as='li' value=''>
                        Cash
                        <List.Item as='ol'>
                            <List.Item as='li' value=''>Wallet</List.Item>
                        </List.Item>
                    </List.Item>

                    <List.Item as='li' value=''>
                        Deposits
                        <List.Item as='ol'>
                            <List.Item as='li' value=''>Deposit 1</List.Item>
                        </List.Item>
                    </List.Item>

                    <List.Item as='li' value=''>
                        Bank accounts
                        <List.Item as='ol'>
                            <List.Item as='li' value=''>Bank account 1</List.Item>
                        </List.Item>
                    </List.Item>

                </List>
            </div>

            <div className="ten wide column">
              {TabExampleSecondaryPointing()}
            </div>
        </div>
    </>
    );
  }

  export default home
