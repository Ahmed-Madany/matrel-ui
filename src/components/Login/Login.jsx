import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, TextField, Typography } from '@mui/material'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    console.log('User Data:', data)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        mt: 10,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" textAlign="center" mb={2}>
        Login
      </Typography>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register('username', { 
          required: 'Username is required',
          pattern: {
            value: /^[a-z0-9_-]{3,15}$/,
            message: 'Invalid username format'
          }
        })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register('email', { required: 'Email is required',pattern:{
            value:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
            ,message:'Invalid email format'
        }})}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register('password', { required: 'Password is required' ,pattern:{
            value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
            ,message:'password should be storng'
        }})}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  )
}

export default Login