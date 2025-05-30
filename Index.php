<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login | macOS Style</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Login Form - Visible by default -->
  <div class="container" id="login-form">
    <h1>Sign In</h1>
    
    <form id="login-form-element" action="register.php" method="POST">
      <label for="login-username">Username</label>
      <input type="text" name="username" id="login-username" placeholder="Your username" required />

      <label for="login-password">Password</label>
      <div class="password-wrapper">
        <input type="password" name="password" id="login-password" placeholder="Your password" required />
      </div>



      <button type="submit" value="Sign In" name="signIn">Sign In</button>
    </form>
    <p>Don't have an account? <a href="#" id="show-register">Create an Account</a></p>
  </div>

  <!-- Registration Form - Hidden initially -->
  <div class="container hidden" id="registration-form">
    <h1>Create Account</h1>
    
    <!-- Progress indicator -->
    <div class="progress-indicator">
      <div class="progress-dot active" data-step="1"></div>
      <div class="progress-dot" data-step="2"></div>
      <div class="progress-dot" data-step="3"></div>
    </div>
    
    <form id="multi-step-form" action="register.php" method="POST">
      
      <!-- Step 1 -->
      <fieldset class="form-step active">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder="Choose a username" required />

        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="you@example.com" required />

        <label for="password">Password</label>
        <div class="password-wrapper">
          <input type="password" name="password" id="password" placeholder="Create a password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]).{8,}$" required />
        </div>

        <label for="confirm_password">Confirm Password</label>
        <div class="password-wrapper">
          <input type="password" name="confirm_password" id="confirm_password" placeholder="Verify your password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]).{8,}$" required />
        </div>

        <button type="button" class="next-btn">Continue</button>
      </fieldset>

      <!-- Step 2 -->
      <fieldset class="form-step">
        <label for="fname">First Name</label>
        <input type="text" name="fname" id="fname" placeholder="First name" required />

        <label for="lname">Last Name</label>
        <input type="text" name="lname" id="lname" placeholder="Last name" required />

        <label for="mname">Middle Name</label>
        <input type="text" name="mname" id="mname" placeholder="Middle name" required />

        <label for="suffix">Suffix</label>
        <input type="text" name="suffix" id="suffix" placeholder="(e.g., Jr., Sr.)" />

        <label for="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" placeholder="+1 (___) ___-____" pattern="[0-9]{11,}" required />

        <div class="btn-group">
          <button type="button" class="prev-btn">Back</button>
          <button type="button" class="next-btn">Continue</button>
        </div>
      </fieldset>

      <!-- Step 3 -->
      <fieldset class="form-step">
        <label for="region">Region</label>
        <select name="region" id="region" required>
          <option value="">Select Region</option>
        </select>

        <label for="province">Province</label>
        <select name="province" id="province" required>
          <option value="">Select Province</option>
        </select>

        <label for="municipality">Municipality</label>
        <select name="municipality" id="municipality" required>
          <option value="">Select Municipality</option>
        </select>

        <label for="barangay">Barangay</label>
        <select name="barangay" id="barangay" required>
          <option value="">Select Barangay</option>
        </select>

        <div class="btn-group">
          <button type="button" class="prev-btn">Back</button>
          <button type="submit" name="signUp" value="Sign Up">Create Account</button>
        </div>
      </fieldset>
    </form>
    <p>Already have an account? <a href="#" id="show-login">Sign In</a></p>
  </div>

  <!-- Forgot Password Form - Hidden initially -->
  <div class="container hidden" id="forgot-password-form">
    <h1>Reset Password</h1>
    
    <form id="reset-form" action="reset-password.php" method="POST">
      <p class="form-description">Enter your email address and we'll send you a link to reset your password.</p>
      
      <label for="reset-email">Email</label>
      <input type="email" name="email" id="reset-email" placeholder="you@example.com" required />

      <div class="btn-group">
        <button type="button" class="secondary-btn" id="back-to-login">Back to Login</button>
        <button type="submit">Send Reset Link</button>
      </div>
      
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>