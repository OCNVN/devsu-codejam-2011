export const exercise_7 = (s1: string): string => {
    const result: string[] = [...s1].map(_character => {
        const asciiCode = _character.charCodeAt(0);
        return (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 193 && asciiCode <= 218) ? String.fromCharCode(asciiCode + 32) : _character;
    });

    return result.join('');
}