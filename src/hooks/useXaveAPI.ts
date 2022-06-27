import { useCallback } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const { REACT_APP_SERVERLESS_STAGE_URL, REACT_APP_XAVE_API_URL } = process.env

export function useXaveAPI(): any {
  /**
   * Mock linking of Bank account
   */
  const linkBankAccount = useCallback(async () => {
    const request: AxiosRequestConfig = {
      method: 'POST',
      url: `${REACT_APP_XAVE_API_URL}/${REACT_APP_SERVERLESS_STAGE_URL}/create_customer_bank_account`,
      data: {
        customerName: 'Johnn Ng',
        registrationType: 'personal',
        registrationId: `S123${Math.floor(1000 + Math.random() * 9000)}J`,
        countryOfResidence: 'singapore',
        dateOfBirth: '1983-11-14',
        nationality: 'SINGAPOREAN',
        accountHolderName: 'Johnn Ng',
        accountNumber: `100924${Math.floor(1000 + Math.random() * 9000)}`,
        bank: 'CIMB',
        gender: 'MALE',
        email: 'test1@gmail.com',
        phoneNo: '+6587654321',
      },
      headers: {
        // accept: '*/*',
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      },
    }

    try {
      const res: AxiosResponse = await axios(request)
      console.log(res)
      return res
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }, [])

  return { linkBankAccount }
}