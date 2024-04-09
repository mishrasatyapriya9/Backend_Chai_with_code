"proxy": "https/localhost/3000" 
this is not works if we didnot create the react app using npx create-react-app



#### see in website how to add proxy in vite react <br/>
import { defineConfig } from 'vite';  <br/>
import react from '@vitejs/plugin-react'; <br/>
 <br/>
export default defineConfig({ <br/>
  server: { <br/>
    proxy: { <br/>
      '/api': 'http://localhost:5000', <br/>
    }, <br/>
  }, <br/>
  plugins: [react()], <br/>
}); <br/>
 <br/>
 
 ### so build the folder before upload in netlify,by npm i build

#### 1) our aim is to think before start a projectis to what we gonnna store as data?? 
Moon modeler(paid) website for modeling our data in tables
erasor.io(free)
https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

#### 1)find the datapoints is going to be need in project like in register (name,email,password,dob,photo)
![Screenshot 2024-04-06 190940](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/4d2685fb-eb4a-4214-90ef-242f3c9c421f)

#### in model we can pass another model data as reference
 ![Screenshot 2024-04-06 191140](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/4585013b-6aa2-4c6b-9ce8-43cafbe53853)
![Screenshot 2024-04-06 192905](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/0046f391-72f7-492d-855a-5e8e464aa547)


#### we need to describe the deatils in the model about the delivery status in a eccomerce website model 
![Screenshot 2024-04-06 200115](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/0a244888-3dc1-49cc-86b1-3a08fb09bdce)

#### to store the order deatils in a singe model we have to get product which gonna order and quintity of the products 
![Screenshot 2024-04-06 200123](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/b1755eef-c46f-4a10-ae6a-81d3598f5434)


#### HTTP,HTTPmethod,HTTP STATUS CODE
![Screenshot 2024-04-07 202417](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/84f47c96-7c5c-4dcd-b0a5-1c8ea1334646)
![Screenshot 2024-04-07 203840](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/89429cd3-de03-4ad5-b181-9835220d1666)
![Screenshot 2024-04-07 204116](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/639dc4bb-13e4-4fd3-b573-bb29817e4d28)




accessToken
RefreshToken 
#### refresh token used to make another accesstoken for the user ,which user accesstoken experies ,so donto ask them to login again just create the Accestoken using the refreshtoken stores in the database model or in the locally like localstorage ,session, cookie.

#### localstorage,cookies,session used for storing the data in frontend ,see how to use all of these 
#### These are two different model but we gonna join throw leftjoin aggregtaion , to find the subscription and watch history things 
![Screenshot 2024-04-09 002855](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/70989920-5336-4ac3-a97f-0b2043f7d028)
![Screenshot 2024-04-09 003330](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/46519a30-575d-4d25-bad1-92ebc9a2afb2)
![Screenshot 2024-04-08 235103](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/e4d70f55-d88c-42d6-af1b-7e798a7d0254)
![Screenshot 2024-04-09 003724](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/e08c1a5f-9d65-4850-bbd2-9b27904e2790)
![Screenshot 2024-04-09 003809](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/720230da-1b60-4827-b907-c494d2f609f6)



### subscriber model=> for every subscription create the files/document having channel and subscriber in it 
![Screenshot 2024-04-09 102238](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/7e30ddcb-19a0-4b67-beb9-a28e31035796)

![Screenshot 2024-04-08 204449](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/e4e3566c-30f3-47a4-a5e5-9db4b63dd404)
####  {
## find the subscriber of chaiwithCode(CWC) => count the document having channel = CWC
## if we want to find the the channels i subscribed so count the files where subscriber is me 
![Screenshot 2024-04-08 204449](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/82663606-1f21-4e9b-857f-d3bc50ae0dbc)
#### }

#### aggregation pipeline in mongodb Atlas,leftjoin![Screenshot 2024-04-09 003809](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/e50d74a1-31cb-40e4-a904-021b17ac4c37)

#### LEARN ,$maatch,$lookup(from,localfield,foreignField,as) , $addfields {using lookup in pipeline for do leftjoin in 2 tables},$project
![Screenshot 2024-04-08 235103](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/91d9ec4b-7fcc-42e4-aa5f-11240d04aeb4)
