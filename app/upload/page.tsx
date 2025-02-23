'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'


interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt="a coffee" />}
            <CldUploadWidget
                uploadPreset='abcdef'
                options={{
                    sources: ['local'],
                    multiple: false,
                    maxFiles: 5,
                }}
                onUpload={(result, widget) => {
                    if (result.event !== 'success') return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id)
                    console.log(result)
                }}>
                {({ open }) => <button
                    className='btn btn-primary'
                    onClick={() => open()}>Upload</button>}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage