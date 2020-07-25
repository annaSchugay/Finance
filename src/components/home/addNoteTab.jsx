import React, { useState, useEffect } from 'react'
import {  Grid } from 'semantic-ui-react'
import TabForm from './tabForm'
// import { categoryList } from '../../date'
import { AccountService, CategoryService } from '../../services'

const AddNote = () => {

  const [incomingform, setIncomingForm] = useState({
    account: 1,
    category: 1
  })

  const [outform, setOutForm] = useState({
    account: 1,
    category: 1
  })

  const [incomeCategory, setIncomeCategory] = useState([])
  const [outcomeCategory, setOutcomeCategory] = useState([])
  const [accounts, setAccounts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const onChangeInc = (e, { value, name }) => {
    setIncomingForm({ ...incomingform, [name]: value })
  }

  const onChangeOut = (e, { value, name }) => {
    setOutForm({ ...outform, [name]: value })
  }

  useEffect(() => {
    async function getAccountList ()
    {
      try {
        setLoading(true)
        const { rows } = await AccountService.list({
          fields: ['_id', 'name']
        })
        setAccounts(rows.map(item => ({
          text: item.name,
          value: item._id,
          key: item._id
        })))
      } catch (e) {
        setError(`${e.name}: ${e.message}`)
      } finally {
        setLoading(false)
      }
    }
    async function getCategoryList () {
      try {
        setLoading(true)
        const { rows } = await CategoryService.list({
          pageSize: 300
        })
        setIncomeCategory(rows.filter(item => item.type === 'IN'))
        setOutcomeCategory(rows.filter(item => item.type === 'OUT'))
      } catch (e) {
        setError(`${e.name}: ${e.message}`)
      } finally {
        setLoading(false)
      }
    }
    getAccountList()
    getCategoryList()
  }, []);

  if (loading) return 'Loading...'
  if (error) return error

  return (
    <Grid divided='vertically' columns='equal'>
      <Grid.Row>
          <Grid.Column>
            text
          </Grid.Column>

          <Grid.Column>
            <TabForm
              accountLabel={'from'}
              accountList={accounts}
              categoryLabel={'Category'}
              categoryList={incomeCategory}
              changeHandler={onChangeInc}
              formDate={incomingform}
            />
          </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <TabForm
            accountLabel={'To'}
            accountList={accounts}
            categoryLabel={'Category'}
            categoryList={outcomeCategory}
            changeHandler={onChangeOut}
            formDate={outform}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>)
}

export default AddNote
