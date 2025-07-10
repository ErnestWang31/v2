**Video of the robot operating: [dummy_move.MP4](https://drive.google.com/file/d/19syZx1zGBMIvCTpJkcvSTVYOZutUH3FT/view?usp=sharing)**
### A desktop 6-dof robotic arm
Goal: build a powerful, precise and compact robotic arm for fun
- **Compact**: Fits on a standard desk without clutter
- **Smooth**: High-precision, fluid motion for real-world tasks
- **Powerful**: Supports payloads up to 2 kg
- **Aesthetic**: Designed to look fire — not just function
![[Pasted image 20241109150655.png|300]]
### Firmware/Control Software Modules
- [[Dummy Control System]]
- [[Stepper Motor Control System]]
- [[6-DOF Robot Kinematics]]
- [[Motion Control System]]
- [[Motor Driver and FOC]]
- [[Encoder Calibration System]]
### Mechanical Design
#### Body/Joints
- 3 prototypes, 144 iterations, FEA-verified
- 2 kg payload capacity (end-effector)

![[Pasted image 20241124201829.png|200]]
#### Actuator Design
- Initial attempt: custom 3D-printed harmonic drives (1:50, 1:20 ratios)
- Final version: commercial harmonic drives for precision and durability
![[Pasted image 20241207135431.png]]
 ![[Pasted image 20241109151433.png]]
#### Arm Geometry
- 6-DOF model for full human-arm mimicry
![[Pasted image 20241109151526.png]]

### Firmware Capabilities

|Module|Highlights|
|---|---|
|**Command System**|Command parsing, emergency stop, state machine|
|**Calibration**|Auto homing, encoder rectification, flash persistence|
|**Motor Control**|FOC sine vector control with lookup tables|
|**Tuning Interface**|Real-time PID tuning and sinusoidal joint testing|
|**Safety Features**|Joint limits, overcurrent/overheat protection, stall detection|
|**Motion Modes**|Sequential point-to-point, continuous trajectory, interruptible|
### Technical Capabilities
| Feature                      | Description                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| **Full FK/IK Solver**        | Real-time Cartesian/joint conversion with multiple solution handling        |
| **FOC Driver with Sine LUT** | High-efficiency driver with fixed-point sine wave modulation                |
| **Encoder Auto-Calibration** | Automated calibration using SPI 14-bit encoders with cycle-aware correction |
| **CAN Command Bus**          | Modular, low-latency control of multi-joint system                          |
| **Step Motor Abstraction**   | Unified class for position, velocity, and current mode control              |
| **Safety-First Design**      | Stall protection, thermal monitoring, emergency stop system                 |