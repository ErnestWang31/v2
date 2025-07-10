### Project Overview
This robot was built with one goal in mind - mobility in unstructured environments.
Key Principles:
- Stability: constantly balancing on its own
- Low Complexity: few moving parts
- Energy Efficiency
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc5NvEk41izefZ2OJIBkiOL7G_62TFrGsR79Vx329jRibWK9V9pwTEjtuVAFc5qo51QrCHKWEsMnja0-IRRU-tDwdfreRPoLLQi6vKuTz-jdpiDY2qwIKAT4lWMOrn_jAWch-iSHQjLRyXBfd6vWwcT9J5B?key=zwGjVZ7EjAL1kdZw6LWOIA)**
### Leg Design
The leg mechanism is a four-bar linkage driven by a single actuator at the hip. It's designed for vertical compliance, stability and geometric simplicity.
#### Core Components:
- Hip Motor: The only actuator. All movements is derived from it. With position feedback.
- Thigh Rod: Connects the actuator to the mechanism
- Drive Rod: Maintains platform orientation through parallel linkage. Mechanically decouples body pitch from leg motion
- Calf rod: interacts with the ground, integrates the wheel and passive compliance.
This structure ensures that the platform stays horizontal regardless of leg movement.
**![|200](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf6-Aqcm9W6y80runQw6WgCobEclnM_y_jqTjMGv5_3BCBeGsGX6-_qk6spFWmrqpcEkVKUGnx6CZfQIxJqCKsqbCe0YXEvi8YXoceT7QEs7rKKcDCRxzw66oM45fS8_hA8lE8UyvSFMeDcOmueQ1inAbkq?key=zwGjVZ7EjAL1kdZw6LWOIA)******![|500](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCBYlRy0VanTB6Tpi9tbbCywqv-0yEVjdDqUGmLGOALF4_SjuCmcPKpOf-tmnLWQief_plpx19X7rqFg-LzjsKQjVGa39p4qXoLPxugtxBsVwd8D0zRx7Hv2EdWEGe5Vso8FeBYB06gyD3bCFT8hQPETvE?key=zwGjVZ7EjAL1kdZw6LWOIA)
### Control System

The robot uses a two-loop architecture to separate body control from leg motion:
#### Body Stabilization - LQR
LQR logic is broken down into multiple PID controllers:
$$u=K_1(\theta-\theta_0)+K_2\dot\theta+K_3(x-x_0)+K_4\dot x$$
1. Angle feedback: Stabilizes Pitch using MPU6050 angle (Y-axis)
2. Gyro feedback: Dampens oscillations with angular velocity
3. Displacement: Uses AS5600 encoders to maintain position
4. Velocity: Regulates forward/backward motion
Instead of solving Riccati equations, the LQR weights are manually tuned as 4 PID terms.
##### Yaw Control
- Integrates IMU yaw angle using angular unwrapping
- PID control on yaw angle and gyro for smooth heading correction
- Yaw correction applied symmetrically to wheel torque
##### Fall Detection & Recovery
- if pitch exceeds $25\degree$, disables motor torque
- automatically resumes balancing after recovery timeout
#### Leg Control & Jumping
###### Roll-Stabilized Leg Height Control
- Uses roll axis from IMU to stabilize lateral motion.
- Applies filtered PID correction to servo targets.
- Leg position scaled based on joystick-controlled body height
##### Jump Mechanism
- Rising-edge detection on directional input triggers jump.
- Executes predefined trajectory using STS3032 servos with synchronized write.
- Includes timed recovery sequence before returning to normal control.

### System Integration
#### FOC Motor Control
- Uses SimpleFOC for torque-mode control of BLDC motors.
- Real-time sensor feedback from AS5600 encoders (I2C).
#### Serial Tuning with Commander
- Live PID and LPF tuning via UART command interface.
- Tweak balance behavior, leg responsiveness, yaw dynamics without reflashing