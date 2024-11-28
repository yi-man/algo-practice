type Action = "L" | "R" | "F" | "B" | "C" | "A";
function rotate(actions: Action[]) {
  let initial: number[] = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < actions.length; i++) {
    const newInitial = [...initial];
    const action = actions[i];

    if (action === "L") {
      newInitial[0] = initial[4];
      newInitial[1] = initial[5];
      newInitial[4] = initial[1];
      newInitial[5] = initial[0];
    } else if (action === "R") {
      newInitial[0] = initial[5];
      newInitial[1] = initial[4];
      newInitial[4] = initial[0];
      newInitial[5] = initial[1];
    } else if (action === "F") {
      newInitial[2] = initial[4];
      newInitial[3] = initial[5];
      newInitial[4] = initial[3];
      newInitial[5] = initial[2];
    } else if (action === "B") {
      newInitial[2] = initial[5];
      newInitial[3] = initial[4];
      newInitial[4] = initial[2];
      newInitial[5] = initial[3];
    } else if (action === "A") {
      newInitial[0] = initial[3];
      newInitial[1] = initial[2];
      newInitial[2] = initial[0];
      newInitial[3] = initial[1];
    } else if (action === "C") {
      newInitial[0] = initial[2];
      newInitial[1] = initial[3];
      newInitial[2] = initial[1];
      newInitial[3] = initial[0];
    }

    initial = [...newInitial];
  }

  return initial.join("");
}

console.log(rotate(["L", "R"]));
