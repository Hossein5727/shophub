import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import Select from 'react-select'
import dataIr from '../../data/ir.json'
import './information.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Information() {

    const [personData, setPersonData] = useState({
        fullName: '',
        phoneNumber: '',
        city: ''
    })

    const inputData = [
        { id: 1, type: "text", value: personData.fullName, name: 'name', icon: <PersonIcon /> },
        { id: 2, type: "number", value: personData.phoneNumber, name: 'number', icon: <PhoneIcon /> },
    ]

    const [image, setImage] = useState(null)

    let navigate = useNavigate()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const changeHandler = (e) => {
        setPersonData({ [e.target.name]: e.target.value })
    }

    const submitHadndler = (e) => {
        e.preventDefault()
        toast.success('Your Data is Submited 👍')
        navigate('/checkout')
    }

    return (
        <div className='information'>
            <form className='formInfo' onSubmit={submitHadndler}>
                <div className='leftColumn'>
                    {!image ? (
                        <>
                            <input
                                type="file"
                                accept='image/*'
                                className='inputfile'
                                name="file"
                                id="file"
                                onChange={onImageChange}
                                required
                            />
                            <label for="file">Choose a your profile</label>
                        </>
                    )
                        : (
                            <>
                                <img
                                    src={image}
                                    alt='preview image'
                                    className='prof'
                                />
                                <h1 style={{ marginTop: '20px' }}>Your Profile</h1>
                                <button className='deleteBtn' onClick={() => setImage(null)}>delete</button>
                            </>
                        )
                    }
                </div>

                <div className='rightColumn'>
                    <h1>Your Data</h1>
                    {inputData.map(item => (
                        <div key={item.id} className='dataProfile'>
                            <div>{item.icon}</div>
                            <input
                                type={item.type}
                                name={item.name}
                                value={item.value}
                                onChange={changeHandler}
                                placeholder={item.name}
                                required
                            />
                        </div>
                    ))}
                    <h4 style={{ marginBottom: '10px' }}>Choose Your City</h4>
                    <select required className='selectBox'>
                        <option value={''}>Select</option>
                        {dataIr.map(item => (
                            <option value={item.city}>{item.city}</option>
                        ))}
                    </select>
                    <button type='submit' className='submitBtn'>Ok</button>
                </div>
            </form >
        </div >
    )
}

export default Information
