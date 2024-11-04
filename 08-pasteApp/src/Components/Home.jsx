import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../Redux/pasteSlice'


const Home = () => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const pastId = searchParams.get("pastId")
  const dispatch = useDispatch();


  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pastId || Date.now().toString(36),
      createAt: new Date().toString(),
    }

    if (pastId) {
      // update
      dispatch(updateToPastes(paste))
    } else {
      // create
      dispatch(addToPastes(paste))
    }

    // after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='p-2 rounded-2xl mt-2 w-[66%] pl-4'
          type="text"
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className='p-2 rounded-2xl mt-2'>
          { pastId ? "Update My Paste" : "Create My Paste" }
        </button>
      </div>
      <div className='mt-8'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          value={value}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home
