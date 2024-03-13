# DeadAnts 🧺🐜

## Problem: Counting Dead Ants

In a picnic area, an orderly trail of ants is marching. It looks something like this:

```
..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
```

But suddenly there is a rumor that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh no, it's an ant stampede! 🐜🏃‍♀️

Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

The resulting carnage looks like this:

```
...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
```

Can you find how many ants have died? 😵

### Solution: DeadAnts Function

The `DeadAnts` function solves this problem by counting the maximum number of occurrences of the letters 'a', 'n', and 't' in a given string, excluding occurrences that form the substring "ant". The result of this function is the maximum number of ants that have died in the stampede. 🕵️‍♂️🐜💀

## Requirements

To run the **DeadAnts** project, make sure you have the following:

1. **Node.js**: Make sure you have Node.js installed on your system. You can download it from [the official Node.js website](https://nodejs.org/).

2. **Git**: If you don't already have it, install Git to clone the project repository. You can download Git from [here](https://git-scm.com/downloads).

3. **BenchmarkJS**: This project uses the [Benchmark.js](https://benchmarkjs.com/) library to compare the performance of two implementations of a function called DeadAnts. :construction:📊

4. **Jest**: This project uses the [Jest](https://jestjs.io/docs/getting-started) library for running tests.

5. **Code Editor**: Use a code editor such as Visual Studio Code, Sublime Text, or any other of your choice.

## Steps to Reproduce Benchmark

Follow these steps to run the project:

1. **Clone the Repository**:
   - Open a terminal or command prompt.
   - Navigate to the location where you want to clone the repository.
   - Run the following command to clone the repository:

     ```
     git clone https://github.com/LuisEstebanC/DeadAnts/tree/PairProgramingCode
     ```

2. **Install Dependencies**:
   - Navigate to the project directory:

     ```
     cd DeadAnts
     ```
   - Install the dependencies by running:

     ```
     npm install
     ```

3. **Run the Application**:
   - Run the following command to start the application:

     ```
     node Benchmarkjs.js
     ```

4. **Explore the Project**:
   - Now you can explore the application and count dead ants. 💀

## Project Files

- `BenchMarkjs.js`: Contains the main code for performance comparison.
- `DeadAntsNewApp.js`: New implementation of the DeadAnts function.
- `DeadAntsOldApp.js`: Original implementation of the DeadAnts function. 📁

Good luck on your quest to count dead ants! 🕵️‍♀️🔍🐜💀
