import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const UploadPage = () => {
    return (
        <CldUploadWidget uploadPreset=''>
        </CldUploadWidget>
    )
}

export default UploadPage