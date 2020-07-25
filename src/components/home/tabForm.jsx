import React, { useState } from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'

const TabForm = ({
  accountLabel = 'To',
  categoryLabel = '',
  categoryList,
  accountList,
  changeHandler,
  formDate
}) => {

  const [changedCategory, setChangedCategory] = useState('')

  const changeCategoryHandler = (e, data) => {
    console.log(data)
    setChangedCategory(data.name)
  }

  const renderCategoryItem = () => {
    return categoryList.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <>
            <Dropdown.Divider />
            <Dropdown.Header key={item._id}>{item.name}</Dropdown.Header>
            {item.children.map(child => (
              <Dropdown.Item
                onClick={(e) => changeCategoryHandler(e, { value: child._id, text: child.name })}
                name='category'
                value={child._id}
                key={child._id}>
                  {child.name}
              </Dropdown.Item>
            ))}
          </>
        )
      } else {
        return <Dropdown.Item onClick={changeCategoryHandler} name='category' value={item._id} key={item._id}>{item.name}</Dropdown.Item>
      }
    })
  }
  return (
  <Form>
    <Form.Select
      name='account'
      label={accountLabel}
      options={accountList}
      onChange={changeHandler}
      value={formDate.account}
    />
    <Dropdown
      search
      fluid
      selection
      name='category'
      label={categoryLabel}
      // onChange={changeHandler}
      value={formDate.category}
      text={changedCategory}
    >
      <Dropdown.Menu>
        {renderCategoryItem()}
      </Dropdown.Menu>
    </Dropdown>
    {/*<Form.Select*/}
    {/*  name='category'*/}
    {/*  label={categoryLabel}*/}
    {/*  options={categoryList}*/}
    {/*  onChange={changeHandler}*/}
    {/*  value={formDate.category}*/}
    {/*  />*/}
    <Button type='submit'>Submit</Button>
  </Form>
)
}

export default TabForm
