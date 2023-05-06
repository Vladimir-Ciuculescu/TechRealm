import React, { useEffect, useState } from 'react'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material'
import { CgClose } from 'react-icons/cg'
import CustomInput from '../common/CustomInput'
import { BsCurrencyDollar } from 'react-icons/bs'
import { getBrandsApi } from '../../services/brandApi'
import CustomSelect from '../common/CustomSelect'
import FileUpload from './FileUpload'
import { IoMdClose } from 'react-icons/io'
import CustomTextArea from '../common/CustomTextArea'
import CustomButton from '../common/CustomButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Option } from '../../interfaces/Options'
import { getCategoriesApi } from '../../services/categoriesApi'
import {
  addProductApi,
  editProductApi,
  getProductsApi,
} from '../../services/productApi'
import { modalsSelector } from '../../redux/modals/selectors'
import { toggleProductModal } from '../../redux/modals/actions'
import { toast } from 'react-toastify'
import { FilterObject } from '../../interfaces/FilterObject'
import {
  currentProductSelector,
  filterObjectSelector,
} from '../../redux/manage_products/selectors'
import { setProductsAction } from '../../redux/manage_products/actions'

const AddProductModal: React.FC<any> = () => {
  const {
    productModal: { visible, mode },
  } = useSelector(modalsSelector)
  const currentProduct = useSelector(currentProductSelector)

  const filterObject = useSelector(filterObjectSelector)

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      brand: '',
      category: '',
      countInStock: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please fill in the name '),
      price: Yup.number()
        .typeError('Please fill in the number')
        .required('Please fill in the price'),
      brand: Yup.string().required('Please select the brand '),
      category: Yup.string().required(
        'Please select the category of the product !',
      ),
      countInStock: Yup.number().required('Please fill in the count in stock '),
      description: Yup.string().required('Please fill in the description '),
    }),
    onSubmit: async (values) => {
      try {
        handleSubmit(values)
      } catch (error) {
        console.log(error)
      }
    },
  })

  const { values, errors, submitForm, touched } = formik

  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [brands, setBrands] = useState<Option[]>([])
  const [categories, setCategories] = useState<Option[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const getBrands = async () => {
    const response = await getBrandsApi()
    const brandOptions: any = response?.map((response) => {
      return { label: response.name, value: response.name }
    })
    setBrands(brandOptions)
  }

  const getCategories = async () => {
    const response = await getCategoriesApi()
    const categoriesOptions: any = response?.map((item) => {
      return { label: item.name, value: item.name }
    })
    setCategories(categoriesOptions)
  }

  useEffect(() => {
    if (visible) {
      formik.resetForm()
      setPreviewImages([])

      if (brands.length === 0) {
        getBrands()
      }
      if (categories.length === 0) {
        getCategories()
      }
    }

    if (mode === 'edit') {
      Object.keys(currentProduct).forEach((key) => {
        formik.setFieldValue(key, currentProduct[key])
      })
      setPreviewImages([currentProduct.defaultImage])
    } else {
      formik.resetForm()
    }
  }, [visible, mode])

  const handleChange = (value: any, label: string) => {
    formik.setFieldValue(label, value)
    formik.setFieldTouched(label, false)
  }

  const deletePreview = (preview: any) => {
    setPreviewImages(
      previewImages.filter((previewImage: string) => previewImage !== preview),
    )
  }

  const isInt = (value: string) => {
    let result = value.includes(',') ? value.replace(',', '') : value

    const regex = /^\d+$/

    return regex.test(result) ? parseInt(result) : parseFloat(result)
  }

  const handleSubmit = async (values: any) => {
    setLoading(true)
    const { name, description, price, brand, countInStock, category } = values

    try {
      const data = {
        id: 1,
        name: name,
        price: isInt(price.toString()),

        brand: brand,
        countInStock: isInt(countInStock.toString()),

        category: category,
        description: description,
        images: previewImages,
      }

      if (mode === 'add') {
        await addProductApi(data)
      } else if (mode === 'edit') {
        data.id = currentProduct.id
        await editProductApi(data)
      }

      const filter: FilterObject = {
        rowsPerPage: filterObject.rowsPerPage,
        page: 1,
      }

      const result = await getProductsApi(filter)

      dispatch(setProductsAction(result))

      closeModal()
      if (mode === 'add') {
        toast.success('Product succesfully added !')
      } else {
        toast.info('Product succesfully edited !')
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  const closeModal = () => {
    dispatch(toggleProductModal(false))
  }

  return (
    <Dialog
      open={visible}
      onClose={closeModal}
      sx={{ backdropFilter: 'blur(8px)' }}
      PaperProps={{
        sx: {
          width: '560px',
          borderRadius: '16px',
          boxShadow:
            '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
          bgcolor: 'Base.White',
        },
      }}
    >
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="TEXT_LG_SEMIBOLD">
            {mode.charAt(0).toUpperCase() + mode.slice(1)} product
          </Typography>
          <IconButton disableRipple onClick={closeModal}>
            <CgClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Grid container rowGap="24px" direction="column">
          <Grid item>
            <CustomInput
              required
              value={values.name}
              handleValue={(value: any) => handleChange(value, 'name')}
              width="100%"
              type="text"
              label="Name"
              error={errors.name && touched.name}
              errorMessage={errors.name}
            />
          </Grid>
          <Grid item>
            <CustomInput
              required
              value={values.price}
              handleValue={(value: any) => handleChange(value, 'price')}
              error={errors.price && touched.price}
              errorMessage={errors.price}
              width="100%"
              type="number"
              label="Price"
              startAdornment={
                <InputAdornment position="start">
                  <BsCurrencyDollar />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid
            container
            item
            direction="row"
            md={12}
            justifyContent="center"
            alignItems="center"
            columnSpacing="16px"
            rowGap="24px"
          >
            <Grid item md={6} sm={12} xs={12}>
              <CustomSelect
                required
                options={brands}
                label="Brand"
                value={values.brand}
                onChange={(e: any) => handleChange(e.value, 'brand')}
                error={errors.brand && touched.brand}
                errorMessage={errors.brand}
                displayDropdownIndicator
                //defaultValue={brands[0]}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <CustomInput
                required
                value={values.countInStock}
                handleValue={(value: any) =>
                  handleChange(value, 'countInStock')
                }
                error={errors.countInStock && touched.countInStock}
                errorMessage={errors.countInStock}
                type="number"
                label="Count in Stock"
                width="100%"
              />
            </Grid>
          </Grid>
          <Grid item>
            <CustomSelect
              required
              options={categories}
              label="Category"
              value={values.category}
              onChange={(e: any) => handleChange(e.value, 'category')}
              error={errors.category && touched.category}
              errorMessage={errors.category}
              displayDropdownIndicator
            />
          </Grid>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: 'flex',
              width: '100%',
              overflow: 'scroll',
              paddingTop: '20px',
            }}
          >
            <Stack direction="row" gap="16px">
              {previewImages.length > 0 &&
                previewImages.map((preview: any) => (
                  <Box
                    sx={{
                      display: 'flex',
                      position: 'relative',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'Gray.200',
                      borderRadius: '6px',
                      padding: '5px',
                    }}
                  >
                    <img
                      src={preview}
                      style={{ width: '100px', height: '100px' }}
                      alt=""
                    />
                    <IconButton
                      onClick={() => deletePreview(preview)}
                      disableRipple
                      sx={{
                        display: 'flex',
                        position: 'absolute',
                        top: '-15px',
                        right: '-15px ',
                        background: 'white',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'Gray.200',
                        width: '30px',
                        height: '30px',
                      }}
                    >
                      <IoMdClose />
                    </IconButton>
                  </Box>
                ))}
            </Stack>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <FileUpload multiple={true} setPreview={setPreviewImages} />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <CustomTextArea
              required
              value={values.description}
              handleValue={(value: any) => handleChange(value, 'description')}
              error={errors.description && touched.description}
              errorMessage={errors.description}
              width="100%"
              label="Description"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ padding: '32px 32px 24px 32px' }}>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ width: '100%' }}
          gap="12px"
        >
          <CustomButton
            onClick={closeModal}
            variant="outlined"
            sx={{
              width: '50%',
              height: '44px',
              borderRadius: '4px',
            }}
          >
            <Typography variant="TEXT_MD_SEMIBOLD" sx={{ color: 'Gray.700' }}>
              Cancel
            </Typography>
          </CustomButton>

          <CustomButton
            onClick={() => submitForm()}
            variant="contained"
            loading={loading}
            sx={{
              width: '50%',
              height: '44px',
              borderRadius: '4px',
              bgcolor: 'Gray.900',
            }}
          >
            <Typography variant="TEXT_MD_SEMIBOLD" sx={{ color: 'Base.White' }}>
              {mode === 'add' ? 'Add' : 'Save'}
            </Typography>
          </CustomButton>
        </Stack>
      </DialogActions>
    </Dialog>
  )
}

export default AddProductModal
