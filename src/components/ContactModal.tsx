import React, { useState } from 'react'
import ModalBackdrop from './ModalBackdrop'
import axios from 'axios'
import { X } from 'lucide-react'
import Spinner from './Spinner'
import { apiUrl } from '@/constants/constant'

type Props = {
  open: boolean,
  setOpen: any,
  type: 0 | 1
}

const ContactModal = ({ open, setOpen, type }: Props) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [openDone, setOpenDone] = useState(false)

  const handleSubmit = async (e: any) => {
    try {
      setLoading(true)
      setErr("")
      e.preventDefault();
      const body = {
        email,
        name,
        message,
        type
      }
      // lark doc 4b
      const res: any = await axios.post(apiUrl + "/api/backend/offical-website-message",
        body,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
      if (res.data.code === 200) {
        setOpenDone(true)
        setOpen(false)
      }
      else throw (res.msg)
    }
    catch (error: any) {
      setErr(err)
    }
    finally {
      setLoading(false)
    }
  };

  const onClose = () => {
    setEmail("")
    setMessage("")
    setName("")
    
    setOpenDone(false)
  }

  return (
    <>
      <ModalBackdrop open={open} setOpen={setOpen}>
        <div className="relative p-4 w-full">
          <button className="absolute top-4 right-4 text-gray-500" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Message</label>
              <textarea
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded w-[100px]"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded w-[100px]"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Send"}
              </button>
            </div>
            {!err && <div className='text-center text-red-500 mt-2'>{err}</div>}
          </form>
        </div>
      </ModalBackdrop>
      <ModalBackdrop open={openDone} setOpen={setOpenDone}>
        <div className='flex flex-col items-center justify-center gap-2 max-w-sm p-4'>
          <h2 className="text-2xl mb-2 text-center">Thank you</h2>
          <div className='mb-4 text-center'>Your message has been submitted.<br /> We will contact your shortly.</div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-[100px]"
            onClick={() => onClose()}
          >
            {"OK"}
          </button>
        </div>
      </ModalBackdrop>
    </>
  )
}

export default ContactModal