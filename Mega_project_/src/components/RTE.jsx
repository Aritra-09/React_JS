import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { Controller } from 'react-hook-form'

function RTE({
    name,
    control,
    label,
    defaultvalue = ""
}) {
  return (
    <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>{label}</label> }


    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultvalue}
        init={{
            initialValue: defaultvalue,
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
              content_style: 'body { font-family: "Red Hat Display", sans-serif; font-size:14px }'
        }}
        />
    )}
    />
    </div>

  
  )
}

export default RTE
