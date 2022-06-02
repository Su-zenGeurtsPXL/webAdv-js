let protoRabbit = {
    speak(line) {
        console.log(`${this.type} says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// killer says 'SKREEEE!'