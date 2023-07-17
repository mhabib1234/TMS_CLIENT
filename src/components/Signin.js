import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const SigninPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication logic
    if (email === "admin@example.com" && password === "admin") {
      // Set user role in localStorage
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify({ role: "admin" }));
      navigate("/admin/starter");
    } else if (email === "trainee@example.com" && password === "trainee") {
      // Set user role in localStorage
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify({ role: "trainee" }));
      navigate("/trainee/alerts");
    }else if (email === "trainer@example.com" && password === "trainer"){
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify({ role: "trainer" }));
      navigate("/trainer/button");

    } else {
      setShowError(true);
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col md={6}>
            <div
              style={{
                background: "#ffffff",
                padding: "40px",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="text-center mb-4">Sign In</h2>
              {showError && (
                <Alert color="danger" className="mb-4">
                  Invalid email or password. Please try again.
                </Alert>
              )}
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label for="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>

                <Button color="primary" type="submit" block>
                  Sign In
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SigninPage;