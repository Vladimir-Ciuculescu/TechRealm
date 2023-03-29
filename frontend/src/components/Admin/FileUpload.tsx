import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Fab,
  FormGroup,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { AiOutlineCloudUpload } from 'react-icons/ai'

interface FileUploadProps {
  file: any
  setFile: (e: any) => void
  preview: string[]
  setPreview: (e: any) => void
  multiple: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({
  file,
  setFile,
  preview,
  setPreview,
  multiple,
}) => {
  const inputRef = useRef<any>()

  const { palette }: any = useTheme()

  const [error, setError] = useState<string>('')

  // useEffect(() => {
  //   let images = []
  //   if (file) {
  //     for (let i = 0; i < file.length; i++) {
  //       images.push(URL.createObjectURL(file[i]))
  //     }
  //     setPreview(images)
  //   }
  // }, [file])

  const renderBorderColor = () => {
    if (error) {
      return 'Error.300'
    } else {
      return 'Gray.200'
    }
  }

  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer.files[0].type.includes('image')) {
      setPreview([...preview, URL.createObjectURL(e.dataTransfer.files[0])])
      setError('')
    } else {
      setError("That's not an image ")
    }
  }

  const handleChange = (e: any) => {
    // setFile(e.target.files)
    console.log(e.target)

    const reader = new FileReader()

    e.map(() => {
      console.log(e)
    })
    // reader.readAsDataURL(file)
    // reader.onload = () => {
    //   resolve(reader.result)
    // }
  }

  const handleFileUpload = (event: any) => {
    const fileList = event.target.files // list of selected files

    const imagesPaths: any[] = []

    // iterate over the selected files
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      const fileReader = new FileReader()

      // add event listener to file reader instance to read the file data
      fileReader.onload = (e) => {
        if (e && e.target) {
          const fileData = e.target.result
          imagesPaths.push(fileData)
          console.log(fileData)
        }

        // do something with the file data, e.g. format it
      }
      fileReader.readAsDataURL(file)
    }

    setFile(imagesPaths)
  }

  return (
    <FormGroup
      onClick={() => inputRef.current.click()}
      onSubmit={(e) => e.preventDefault()}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Paper
        elevation={0}
        sx={{
          padding: '16px 24px',
          background: '#FFFFFF',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: `${renderBorderColor()}`,
          borderRadius: '12px',
          cursor: 'pointer',
        }}
      >
        <input
          multiple={multiple}
          accept="image/*"
          type="file"
          ref={inputRef}
          //onChange={(e) => handleChange(e)}
          onChange={(e) => handleFileUpload(e)}
          hidden
        />

        <Stack direction="column" alignItems="center" gap="12px">
          <Fab
            disableRipple
            sx={{
              height: '40px',
              width: '40px',
              bgcolor: 'Violet.400',
              boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${palette.Violet[200]}`,
              '&:focus': {
                boxShadow: 0,
              },
            }}
          >
            <AiOutlineCloudUpload style={{ color: palette.Base.White }} />
          </Fab>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Stack direction="row" columnGap="4px">
              <Typography
                variant="TEXT_SM_SEMIBOLD"
                sx={{ color: 'Helix.600' }}
              >
                Click to upload
              </Typography>

              <Typography
                variant="TEXT_SM_REGULAR"
                sx={{ color: 'GrayTrue.600' }}
              >
                or drag and drop
              </Typography>
            </Stack>
            <Typography
              variant="TEXT_XS_REGULAR"
              sx={{ color: 'GrayTrue.600' }}
            >
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
          </Box>
          {/* {error && (
            <Typography variant="TEXT_XS_REGULAR" sx={{ color: 'Error.400' }}>
              That's not an image format
            </Typography>
          )} */}
          {error && (
            <Typography variant="TEXT_XS_REGULAR" sx={{ color: 'Error.400' }}>
              {error}
            </Typography>
          )}
        </Stack>
      </Paper>
    </FormGroup>
  )
}

export default FileUpload
