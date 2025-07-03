import path from 'path';
import { glob } from 'glob';

function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

async function sidebar() {
    const files = await glob('**/*.md', { ignore: 'node_modules/**' });

    const filesAll = files.reduce((acc, curr) => {
        const { dir, base, name } = path.parse(curr);

        const dirCap = dir.split('-').map(n => capitalizeFirstLetter(n)).join(' ');

        if (!acc[dir]) {
            acc[dir] = {
                text: dirCap,
                items: [],
            } as any;
        }

        const text = name.split('-').map(n => capitalizeFirstLetter(n)).join(' ');

        acc[dir].items.push({
            text: name === 'index' ? dirCap : text,
            link: `${dir ? `/${dir}` : ''}/${base}`
        });

        acc[dir].items = acc[dir].items.sort((a: any) => a?.text.includes(dirCap) ? 1 : 0);

        return acc;
    }, {} as any);

    const filesArray = Object.values(filesAll)

    console.log(JSON.stringify(filesArray, null, 2))
}

sidebar();