import { React, useState } from "react";
import { Loader2 } from "lucide-react"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";


export default function Home() {
  const [flag, setFlag] = useState(true)
  const [image, setImage] = useState("")
  const [response, setResponse] = useState('');
  const [sendimage, setSendImage] = useState();

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSendImage(reader.result.substring(22));
        setImage(reader.result);

      }
    }
    console.log(sendimage)
    reader.readAsDataURL(e.target.files[0]);

  }

  const postData = async () => {
    setFlag(false)
    try {
      const response = await fetch("http://localhost:8080/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: sendimage }),
      });

      if (response.ok) {
        const data = await response.json();
        setFlag(true)
        setResponse(data);
      } else {
        console.error("Failed to send POST request");
      }
    } catch (error) {
      console.error("Error sending POST request", error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <span className=" text-4xl font-bold mt-10">Online Dog Breed Classifier</span>
      <div className="flex w-4/5 h-4/5 mt-10">
        <Card className="w-1/2 bg-white text-black h-auto rounded-l-2xl">
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
            <CardDescription>predict your dog breed in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className=" w-4/6 h-56 object-cover">
                  <img src={image} alt="image" />
                </div>
                <div className="flex flex-col space-y-1.5 text-center">
                  <Input type="file" placeholder="upload image" accept="image/*" className="w-52" onChange={imageHandler} />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="bg-black text-white hover:bg-gray-600 " onClick={postData}>Predict</Button>
          </CardFooter>
        </Card>
        <Card className="w-1/2 bg-white text-black h-auto rounded-r-2xl">
          <CardHeader>
            <CardTitle>Predict</CardTitle>
            <CardDescription>-----()------</CardDescription>
          </CardHeader>
          <CardContent>

            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <div className="w-4/6 h-56 flex flex-col">
                  {flag == true ? (
                    < div className="mt-14">
                      <p>{'{'}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;breed:&nbsp; {response}</p>
                      <p>{'}'} </p>
                    </div>
                    ) : 
                    (<>
                      <Button disabled className="w-full h-full ">
                        <Loader2 className="w-full h-full animate-spin" />
                          Processing
                      </Button>
                </>)}
              </div>
            </div>
          </div>

        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
    </div>


    </div >
  );
}

/**
 * .refine((file) => file?.size <= 5 * 1024 * 1024, {
      message: "Max file size is 5Mb"
    })
    .refine(file => file.length > 0, "File is required")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),{
        message:"Only .jpg, .jpeg, .png and .webp formats are supported."
      })
 */

/** 
 * 
 * <Card className="w-[350px] bg-white text-black">
          <CardHeader>
            <CardTitle>Image Upload</CardTitle>
            <CardDescription>
              Upload the dog image to predict
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="image"
                          type="file"
                         
                          {...field}
                          className="bg-black text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-gray-800 text-white hover:bg-black">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
*/
