function write (string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.blue.bgBlack.inverse('CSGO INVERSE'), {
    padding: 1,
    margin: 3,
    borderStyle: 'double',
    title: 'Roland Tahker',
    titleAlignment: 'left',


}));

write(boxen(chalk.yellow.bold('RIO BOLD FONT'), {
    padding: 1,
    margin: 1,
    title: 'MM-21',
    titleAlignment: 'right',

}));

write(boxen(chalk.blue.bgBlack.strikethrough('MAJOR'), {
    padding: 1,
    margin: 1,
    title: 'Faze 😂',
    titleAlignment: 'center',
    borderStyle: 'classic'

}));

write(boxen(chalk.underline.black.bgRed('2022'), {
    padding: 1,
    margin: 1,
    borderStyle: 'double'
}));

write(boxen(chalk.red.bgBlack.italic('BRAZIL'), {
    padding: 1,
    margin: 1,
    borderStyle: 'arrow'

}));

write(boxen(chalk.white.bgMagenta.underline('VAMOS'), {
    padding: 1,
    margin: 1,
    title: 'Cloud9 💪',
    titleAlignment: 'center',


}));










