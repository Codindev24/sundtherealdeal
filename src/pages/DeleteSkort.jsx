import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React from "react";
import { useToast } from '@chakra-ui/react'

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

export default function DeleteSkort() { 
const [loading, setLoading] = useState(false);
const toast = useToast();

async function handleDelete({ id }) {
 setLoading(true);
 const { error } = await supabase
 .from('skort')
 .delete()
 .eq('id', id)  
 setLoading(false);

 toast({
  title: error || 'Skólakorti Eytt..',
  position: 'top',
  description: "We've created your account for you.",
  status: error ? 'error' : 'Eytt..',
  duration: 2000,
  isClosable: true,
})

}

return (

<RemoveCircleIcon isLoading={loading} onClick={handleDelete} />

);    

}