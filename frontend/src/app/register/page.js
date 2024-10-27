"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Breadcrumb from "../../components/breadcrumb";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import Helper from "@/services/helper";
// import { signIn } from "next-auth/react";
import Image from "next/image";
import Constant from "../../config/constant";
import ReCAPTCHA from "react-google-recaptcha";
import Apilist from "../api";
// import { setCookie } from "cookies-next";

const Register = () => {
    // State hooks for managing loading status and recaptcha token
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    // Next.js router for navigation
    // const router = useRouter();

    // Destructuring methods and state from react-hook-form
    const {
        register,
        handleSubmit,
        watch,
        control,
        reset,
        formState: { errors },
        setError,
        clearErrors
    } = useForm({
        shouldFocusError: false
    });

    // Watching password field to compare with confirm password
    const password = watch("password");

    // Function to handle recaptcha change event
    function onRecaptchaChange(value) {
        if (value) {
            clearErrors("recaptcha");
        }
    }

    // Handler function for form submission
    const onSubmit = async (data) => {
        setLoading(true);

        if (!data.recaptcha) {
            setError("recaptcha", {
                type: "manual",
                message: "Please select recaptcha."
            })
            setLoading(false)
            return;
        }

        try {
            // Constructing request payload for user registration
            const req = {
                data: {
                    full_name: data?.full_name,
                    email: data?.email,
                    password: data?.password,
                    // confirm_password: data?.confirm_password
                }
            };

            // Call to API to register the user
            const response = await new Apilist().userRegistraction(req);
            console.log(response);

            // Handling response based on status
            if (response.status == "success") {
                toast.success(response.message);
                reset(); // Reset form fields
                setLoading(false); // Set loading to false after successful registration
                localStorage.setItem("userEmail", response?.result?.email)
                const pathname = router.pathname.slice(1)
                localStorage.setItem("user_type", pathname)
                router.push(
                    {
                        pathname: "/verify_otp",
                        query: {
                            creds: response?.result?.email,
                            userData: JSON.stringify(response?.result)
                        },
                    },
                    "/verify_otp"
                );
            } else if (response.status == "error") {
                if (response.message.email) {
                    setError("email", {
                        type: "manual",
                        message: response.message.email,
                    });
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };



    const googleLoginFun = (e) => {
        e.preventDefault(),

        Helper.loginByGoogle();
    }

    return (
        <>
            {/* <Breadcrumb title={router?.pathname} /> */}
            <div className="login-section">
                <div className="container">
                    <div className="loginbox">
                        <figure>
                            {/* <Image src={`${Constant.BASE_IMAGE_URL}/logo.png`} width={150} height={65} alt="logo" /> */}
                            BR Jewellers
                        </figure>
                        <h2>Sign up</h2>
                        <p className="text-center">Already have an account?
                            <Link href="/login"> Sign in</Link>
                        </p>
                        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                {/* Email Input Field */}
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            {...register("email", {
                                                required: "Please enter email address.",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Please enter a valid email address.",
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <small className="text-danger">
                                                {errors?.email?.message}
                                            </small>
                                        )}
                                    </div>
                                </div>
                                {/* Full Name Input Field */}
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Enter Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter full name"
                                            {...register("full_name", { required: true })}
                                        />
                                        {errors.full_name && (
                                            <small className="text-danger">
                                                Please enter full name.
                                            </small>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Password Input Field */}
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            placeholder="Password"
                                            {...register("password", {
                                                required: "Please enter password.",
                                                pattern: {
                                                    value:
                                                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                                    message:
                                                        "The password must have minimum of 6 characters and a combination of uppercase alphabet, lowercase alphabet, numeric and special characters.",
                                                },
                                            })}
                                        />
                                        {errors.password && (
                                            <small className="text-danger">
                                                {errors.password.message}
                                            </small>
                                        )}
                                        <Link
                                            className="viewpass"
                                            href="javascript:void(0)"
                                            tabIndex={-1}
                                            onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                            {
                                                showPassword ? (<Image src={`${Constant.BASE_IMAGE_URL}/visibility_black.svg`} width={30} height={20} alt="img" />) : (<Image src={`${Constant.BASE_IMAGE_URL}/visibility_off.svg`} width={30} height={20} alt="img" />)
                                            }
                                        </Link>
                                    </div>
                                </div>
                                {/* Confirm Password Input Field */}
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            {...register("confirm_password", {
                                                required: "Please enter confirm password.",
                                                validate: (value) =>
                                                    value === password || "Password and confirm password should be same.",
                                            })}
                                        />
                                        {errors.confirm_password && (
                                            <small className="text-danger">
                                                {errors.confirm_password.message}
                                            </small>
                                        )}
                                        <Link
                                            className="viewpass"
                                            href="javascript:void(0)"
                                            tabIndex={-1}
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        >
                                            {
                                                showConfirmPassword ? (<Image src={`${Constant.BASE_IMAGE_URL}/visibility_black.svg`} width={30} height={20} alt="img" />) : (<Image src={`${Constant.BASE_IMAGE_URL}/visibility_off.svg`} width={30} height={20} alt="img" />)
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <Controller
                                    name="recaptcha"
                                    className="box-container"
                                    control={control}
                                    rules={{ required: "Please select recaptcha." }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <ReCAPTCHA
                                            style={{ transform: "scale(1)", transformOrigin: "0 0" }}
                                            sitekey={Constant?.SITE_KEY}
                                            className="CustomRecaptcha"
                                            onChange={(value) => {
                                                onChange(value);
                                                onRecaptchaChange(value);
                                            }}
                                            onBlur={onBlur}
                                            ref={ref}
                                        />
                                    )}
                                />
                                {errors.recaptcha && (
                                    <small className="text-danger">
                                        {errors.recaptcha.message}
                                    </small>
                                )} */}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn-fill w-100">
                                    {
                                        loading ? (
                                            <>
                                                <span>Loading...</span>
                                                <div className="spinner-border spinner-border-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </>
                                        ) : "Signup"
                                    }
                                </button>
                            </div>
                            <div className="other-login-option text-center">
                                <div className="seprate"><span>Or</span></div>
								<Link className="gmail-login-btn btn-outline" onClick={(e) => googleLoginFun(e)} href="">
									<Image src={`${Constant.BASE_IMAGE_URL}/google_logo_icon.svg`} alt="google" width="24" height="24"/>
									<span>log-In with</span>
								</Link>
                            </div>
                            <div className="form-group mb-0">
                                <hr />
                                <p>By signing up, you agree to the <a href="">Terms &amp; Conditions</a> and <a href="">Privacy Policy</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

// Server-side props for setting page title and description
// export async function getServerSideProps(context) {
//     const titleData = { title: "Register", description: "Register" };
//     return {
//         props: {
//             headProps: titleData,
//         },
//     };
// }

export default Register;