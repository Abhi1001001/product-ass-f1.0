<h1 align="center">🚀 Auth Frontend App</h1>

<p align="center">
  A modern authentication frontend built using Next.js and Tailwind CSS.
</p>

<hr />

<h2>📌 Features</h2>
<ul>
  <li>🔐 User Signup</li>
  <li>🔑 User Login</li>
  <li>📊 Dashboard after login</li>
  <li>🧭 Responsive Navbar with authentication state</li>
  <li>⚡ Fast UI with Tailwind CSS</li>
  <li>🌐 API integration (Backend connected)</li>
</ul>

<hr />

<h2>🛠️ Tech Stack</h2>
<ul>
  <li>Next.js (App Router)</li>
  <li>JavaScript (ES6+)</li>
  <li>Tailwind CSS</li>
  <li>Fetch API</li>
</ul>

<hr />

<h2>📁 Folder Structure</h2>

<pre>
app/
 ├── components/
 │    └── Navbar.js
 ├── login/
 │    └── page.js
 ├── signup/
 │    └── page.js
 ├── dashboard/
 │    └── page.js
 ├── layout.js
 └── globals.css
</pre>

<hr />

<h2>⚙️ Installation & Setup</h2>

<h3>1. Clone Repository</h3>
<pre>
git clone https://github.com/your-username/your-repo.git
cd your-repo
</pre>

<h3>2. Install Dependencies</h3>
<pre>
npm install
</pre>

<h3>3. Setup Environment Variables</h3>

<p>Create a <b>.env.local</b> file and add:</p>

<pre>
NEXT_PUBLIC_API_URL=http://localhost:5000
</pre>

<h3>4. Run Development Server</h3>
<pre>
npm run dev
</pre>

<p>App will run on: <b>http://localhost:3000</b></p>

<hr />

<h2>🔗 API Endpoints Used</h2>

<ul>
  <li><b>POST</b> /api/auth/signup → Register user</li>
  <li><b>POST</b> /api/auth/login → Login user</li>
</ul>

<hr />

<h2>🔐 Authentication Flow</h2>

<ol>
  <li>User signs up using name, email, password</li>
  <li>User logs in and receives token</li>
  <li>Token is stored in <b>localStorage</b></li>
  <li>User is redirected to dashboard</li>
  <li>Navbar updates based on login state</li>
</ol>

<hr />

<h2>📸 Screens (Optional)</h2>

<p>Add screenshots here:</p>

<pre>
/screenshots/login.png
/screenshots/signup.png
/screenshots/dashboard.png
</pre>

<hr />

<h2>🚀 Future Improvements</h2>
<ul>
  <li>🔒 Secure authentication using cookies</li>
  <li>👤 User profile section</li>
  <li>📱 Mobile responsive navbar</li>
  <li>⚡ Global state management (Redux / Context API)</li>
</ul>

<hr />

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! Feel free to fork the repo and submit a pull request.</p>

<hr />

<h2>📄 License</h2>

<p>This project is licensed under the MIT License.</p>

<hr />

<p align="center">Made with ❤️ using Next.js</p>