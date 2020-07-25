import React, { useState } from 'react'
import { Table, Menu, Icon } from 'semantic-ui-react'

const TableC = ({ header, onClats }) => {
    const [row] = useState([
        { header: 'sfsduof', r1: 'sduuf', r2: 'sdfs', r3: 'dfsf', r4: 'fsdfsn,,,,df' },
        { header: 'sfsdf', r1: 'sdf', r2: 'sdfs', r3: 'dfsf', r4: 'fsdfs,,,df' },
        { header: 'sfsduf', r1: 'suiudf', r2: 'sdkjuifs', r3: 'dffgsf', r4: 'fsdfsdf' },
        { header: 'sfsduiuf', r1: 'sdf', r2: 'sdfs', r3: 'dfsdfkf', r4: 'fsdfnsdf' },
        { header: 'sfsm,mdf', r1: 'sdfkjk', r2: 'sdfs', r3: 'dfsf', r4: 'fsdfsdf' }
    ])
    const renderHeader = () => <h3>{header}</h3>
    const renderHeaderV2 = () => <h2>{header}</h2>
    const renderH = () => {
        if (Math.random() > 0.5) {
            return renderHeader()
        } else {
            return renderHeaderV2()
        }
    }
    return (
        <>
            {renderH()}
           
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {row.map((item, index) => (

                        <Table.Row key={index}>
                            <Table.Cell>
                                {item.r1}
                            </Table.Cell>
                            <Table.Cell>{item.r2}</Table.Cell>
                            <Table.Cell>{item.r3}</Table.Cell>
                        </Table.Row>
                    ))}
                    
                </Table.Body>

                <Table.Footer>
                    {row.length > 3 ? <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row> : ''}
                </Table.Footer>
            </Table>
        </>
    )
}

export default TableC
