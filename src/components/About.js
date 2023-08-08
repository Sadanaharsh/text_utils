import React from "react";

export default function About(props) {
  return (
    <div className="container my-4" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2 className="my-3">Welcome to TextUtils – Your Ultimate Text Transformation Hub!</h2>
        <div class="card w-85" style = {{backgroundColor : props.mode === 'dark'?'grey':'white' ,  color : props.mode === 'dark'?'white':'black'}} >
  <div class="card-body">
    <br />
    
    <div>
    TextUtils is your go-to online destination for effortlessly manipulating text just the way you want it. Our user-friendly and versatile platform allows you to easily convert text to uppercase or lowercase, tidy up extra spaces, and clear formatting – all in a matter of seconds.
    </div>
    <br />
    <br />
    <h3>Features</h3>
    <ul>
      <li>Convert to Uppercase/Lowercase: Transform your text with a single click! Whether you need your text to stand out in UPPERCASE or prefer the subtlety of lowercase, TextUtils has you covered.</li>
      <li>Trim Extra Spaces: Tired of dealing with messy and inconsistent spacing? Our tool effortlessly trims excess spaces, ensuring your text looks clean and professional every time.</li>
      <li>Clear Formatting: Say goodbye to unwanted formatting that clutters your text. With our clear formatting option, you can restore your text to its pristine, unadorned state, making it easier to work with or paste into other applications.</li>
       <li>Fast and Reliable: Experience lightning-fast text transformations without compromising on accuracy. TextUtils processes your requests quickly and reliably, saving you time and effort.</li>
       <li>Secure and Private: We take your privacy seriously. TextUtils doesn't store or retain any of the text you input, ensuring your sensitive information remains confidential.</li>
       <li>Effortless and Intuitive: TextUtils is designed with simplicity in mind. Whether you're a professional writer, student, or just someone looking to tidy up their text, our intuitive interface ensures a smooth experience for all users.</li>   
    </ul>
  </div>
</div>
    </div>
  );
}
