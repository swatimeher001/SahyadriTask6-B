<?php
$message = ''; // Initialize message variable

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process signup form submission
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate form fields (basic validation)
    if (empty($name) || empty($email) || empty($password)) {
        $message = 'Please fill in all fields.';
        $messageClass = 'error'; // Define error class for styling
    } else {
        // Perform any necessary database operations here
        // For demonstration purposes, assume successful signup
        $message = 'Account created successfully!';
        $messageClass = 'success'; // Define success class for styling
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup/Signin Page</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        /* Add your CSS styles here if needed */
    </style>
</head>
<body>
    <div class="container">
        <div class="form-container">
            <h1 id="form-title">Get Started Now</h1>

            <!-- Display Message -->
            <?php if (!empty($message)): ?>
                <p class="message <?php echo $messageClass; ?>"><?php echo $message; ?></p>
            <?php endif; ?>
            
            <!-- Signup Form -->
            <form id="signup-form" action="signup.php" method="POST">
                <div class="input-group">
                    <label for="signup-name">Name</label>
                    <input type="text" id="signup-name" name="name" placeholder="Enter your name" required>
                </div>
                <div class="input-group">
                    <label for="signup-email">Email address</label>
                    <input type="email" id="signup-email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="input-group">
                    <label for="signup-password">Password</label>
                    <input type="password" id="signup-password" name="password" placeholder="Enter your password" required>
                </div>
                <button type="submit">Signup</button>
            </form>

            <!-- Signin Form -->
            <form id="signin-form" action="signin.php" method="POST" style="display: none;">
                <div class="input-group">
                    <label for="signin-email">Email address</label>
                    <input type="email" id="signin-email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="input-group">
                    <label for="signin-password">Password</label>
                    <input type="password" id="signin-password" name="password" placeholder="Enter your password" required>
                </div>
                <button type="submit">Sign In</button>
            </form>

            <div class="alternative-signup">
                <p>Or</p>
                <button class="google-signin">Sign in with Google</button>
                <button class="apple-signin">Sign in with Apple</button>
            </div>
            <p class="signin-link" id="toggle-signup">
                Have an account? <a href="#" onclick="toggleForm('signin')">Sign In</a>
            </p>
            <p class="signin-link" id="toggle-signin" style="display: none;">
                Don't have an account? <a href="#" onclick="toggleForm('signup')">Sign Up</a>
            </p>
        </div>
        <div class="image-container">
            <img src="images/design.png" alt="Leaf">
        </div>
    </div>
    <script src="script/script.js"></script>
</body>
</html>
