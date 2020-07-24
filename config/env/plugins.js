module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('comodoro'),
        api_key: env('971956325637768'),
        api_secret: env('PBxzWhMXyNxZVoNhuGBWIIRBQfM'),
      },
    },
  });