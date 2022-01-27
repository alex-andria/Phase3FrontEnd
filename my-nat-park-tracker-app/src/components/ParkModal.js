import React from "react";
import '../sarah.css'
import { RiCloseLine } from "react-icons/ri";

function ParkModal({ setIsOpen, onSubmit, onChange, formData, setStateID, allStatesData }) {

    function closeModal(e) {
        e.preventDefault()
        setIsOpen(false);
    }
    
    return (
        <div>
            <div className='darkBG' onClick={closeModal} />
            <div className='centered'>
                <div className='modal'>
                
                <button className='closeBtn' onClick={closeModal}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className='modalContent'>
                    <form id='newParkForm' onSubmit={onSubmit}>
                        <div className='modalHeader'>
                            <h5 className='heading'>New Park Form</h5>
                        </div>
                        <input type='text' name='park_name' placeholder='Name' value={formData.park_name} onChange={onChange}></input>
                        <input type='text' name='description' placeholder='Description' value={formData.description} onChange={onChange}></input>
                        <input type='text' name='fee' placeholder='Fee' value={formData.fee} onChange={onChange}></input>
                        <input type='text' name='image_url' placeholder='Image URL'value={formData.image_url} onChange={onChange}></input>
                        <input type='text' name='location' placeholder='Location' value={formData.location} onChange={onChange}></input>
                        <input type='text' name='states' placeholder='State' value={formData.states} onChange={onChange}></input>
                        <input type='text' name='website' placeholder='Website' value={formData.website} onChange={onChange}></input>
                        <br/>
                        <select name='state_id' onChange={onChange}>
                                <option value="All">Select Your State</option>
                                {allStatesData.map(s => <option value={s.id}>{s.state_name}</option>)}
                        </select>
                        <div className='modalActions'>
                            <div className='actionsContainer'>
                                <button className='addBtn' type='submit'>
                                    Add Park
                                </button>
                            <button
                                type='button'
                                className='cancelBtn'
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            </div>
                        </div>
                    </form>
                    Are you sure you want to add this park?
                </div>
                
                </div>
            </div>
        </div>
    )
}
  
export default ParkModal;