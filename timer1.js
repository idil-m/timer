const commands = process.argv

commands.forEach(command => {
  if (typeof command !== 'number' && isNaN(command)){
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`Beep!`);
  }, command * 1000);
});

  