
-> useRef (we use this reference hook to get the data from the forms)

  const email = useRef(null);
  const password = useRef(null);

  in the input box we pass this ref={email} in email box and {password} in password box

-> useState 

    const [password,setPassword] = useState("");

    now we can update the password by setPassword then it gets updated.

-> useNavigate

  const navigate = useNavigate();
  navigate("/");
  but we can use this navigate in the children's of the routing