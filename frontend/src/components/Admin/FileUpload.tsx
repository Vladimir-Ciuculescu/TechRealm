import React, { useRef, useState } from 'react'
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
  setPreview: (e: any) => void
  multiple: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({ setPreview, multiple }) => {
  const inputRef = useRef<any>()

  const { palette }: any = useTheme()

  const [error, setError] = useState<string>('')

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
      handleFileUpload(e.dataTransfer.files)
      setError('')
    } else {
      setError("That's not an image ")
    }
  }

  const handleFileUpload = (files: any[]) => {
    const images: any[] = []
    const fileReaders: any[] = []
    let isCancel = false
    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const fileReader = new FileReader()
        fileReaders.push(fileReader)
        fileReader.onload = (e: any) => {
          const { result } = e.target
          if (result) {
            images.push(result)
          }
          if (images.length === files.length && !isCancel) {
            setPreview(images)
          }
        }
        fileReader.readAsDataURL(file)
      }
    }
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
          onChange={(e: any) => handleFileUpload(e.target.files)}
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
              '&:hover': {
                bgcolor: 'Violet.400',
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
